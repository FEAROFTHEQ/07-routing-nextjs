import { redirect } from "next/navigation";
export default function Notes() {
  redirect("/notes/filter/all");
}

// import {
//   QueryClient,
//   HydrationBoundary,
//   dehydrate,
// } from "@tanstack/react-query";
// import NotesClient from "../../components/NotesClient/Notes.client";
// import { fetchNotes } from "@/lib/api";

// export default async function Notes() {
//   const query = "";
//   const page = 1;
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: ["notes", query, page],
//     queryFn: () => fetchNotes(query, page),
//   });
//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotesClient />
//     </HydrationBoundary>
//   );
// }
