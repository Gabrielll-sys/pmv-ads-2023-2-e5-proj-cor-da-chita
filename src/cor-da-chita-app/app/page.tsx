"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Banner from "../components/Banner";
import LPGrid from "../components/LPGrid";



export default function Home() {
  const route = useRouter();
  return (
    <main className="bg-light">
        <Banner />
        <LPGrid />
        <div className="bg-dark  text-center">
        <Link href="/all-products"><h2 className="text-3xl text-white p-12 ">Ver todos os produtos</h2></Link>
        </div>

    </main>
  );
}
