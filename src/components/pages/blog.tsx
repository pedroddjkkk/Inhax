"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Prisma } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Blog({
  posts,
}: {
  posts: Prisma.postsGetPayload<{
    include: {
      author: true;
    };
  }>[];
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const session = useSession();
  const router = useRouter();

  function handleClose() {
    setName("");
    setContent("");
    setDescription("");
    setOpen(false);
  }

  async function onSubmit() {
    setLoading(true);
    const res = await axios.post("/api/post", {
      title: name,
      content,
      description,
    });
    setLoading(false);

    setTimeout(() => {
      router.refresh();
      handleClose();
    }, 1000);
  }

  return (
    <div className="mx-auto w-[80%]">
      <div className=" bg-slate-50 flex flex-col justify-center items-center shadow-sm mt-8 p-8">
        <h1 className="text-4xl font-semibold flex flex-row justify-center items-center">
          Blog{" "}
          {session.data?.user.admin ? (
            <GoPlus
              size={32}
              onClick={() => setOpen((prev) => !prev)}
              className="text-red-500 ml-2 hover:cursor-pointer"
            />
          ) : null}
        </h1>
        <span className="text-lg mt-1">
          Aqui está as ultimas atualizações de viagens espaciais!
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-between mt-12">
        {posts
          .filter((post) => !post.deletedAt)
          .map((post) => (
            <Link
              href={"/blog/" + post.id}
              key={post.id}
              className="mt-8 bg-red-500 flex flex-col justify-center items-center shadow-sm p-8 w-[48%] rounded-md hover:bg-red-600 transition-colors duration-150"
            >
              <h1 className="text-4xl text-white">{post.title}</h1>
              <span className="text-white mt-2">{post.description}</span>
            </Link>
          ))}
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <DialogTitle>Escrever novo Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Título do Post"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "20px", marginTop: "20px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            id="description"
            label="Descrição do Post"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "20px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <ReactQuill
            theme="snow"
            style={{ width: "900px", height: "300px" }}
            onChange={setContent}
            value={content}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={onSubmit} disabled={loading}>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
