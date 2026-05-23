import { redirect } from "next/navigation";

/** Legacy route — rooms live on the homepage for now */
export default function RoomsPage() {
  redirect("/#rooms");
}
