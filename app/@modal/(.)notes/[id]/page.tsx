import css from "./NotePreview.module.css";

import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import Button from "@/components/Button/Button";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return (
    <Modal>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.date}>
            Created date: {new Date(note.createdAt).toLocaleString()}
          </p>
        </div>
        <Button />
      </div>
    </Modal>
  );
};

export default NotePreview;
