"use client";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { CONTACTS } from "@/constants/constants";
import React from "react";
import { BsCopy } from "react-icons/bs";

interface Contact {
  title: string;
  item: string;
}

const Page = () => {
  const { toast } = useToast();

  const handleCopy = (contact: Contact) => {
    navigator.clipboard
      .writeText(contact.item)
      .then(() => {
        toast({
          title: `${contact.title} copied!`,
        });
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
      });
  };

  return (
    <div className="min-h-screen">
      <section className="container w-full py-12">
        <h1 className=" text-center text-3xl font-extrabold">
          Get in touch, Let&apos;s talk.
        </h1>

        <div className="mx-auto max-w-full py-20 md:w-[500px] lg:w-[750px]">
          <div className="card shadow-xl">
            <div className="card-body gap-5">
              {CONTACTS.map((contact) => (
                <div
                  key={contact.title}
                  className="flex flex-col items-center justify-center gap-3 rounded border border-base-300 p-5 text-center shadow-md md:flex-row md:gap-8 md:border-none"
                >
                  <span> {contact.logo} </span>
                  <input
                    className="border-none bg-transparent text-center outline-none"
                    type="text"
                    value={contact.item}
                  />
                  <button
                    onClick={() => handleCopy(contact)}
                    className="btn btn-ghost"
                  >
                    <BsCopy className="text-lg" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-base-200">
        <Toaster />
      </div>
    </div>
  );
};

export default Page;
