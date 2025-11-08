import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import NotesPreviewClient from "./NotesPreview.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });
  return (
    <Modal>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesPreviewClient />
      </HydrationBoundary>
    </Modal>
  );
};

export default NotePreview;
