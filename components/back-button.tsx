"use client";
import { Icons } from "@/components/Icon";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <button type="button" className="btn btn-danger" onClick={goBack}>
      <Icons.kembali className="me-2" size={20}/>
      <small>Kembali</small>
    </button>
  );
};
