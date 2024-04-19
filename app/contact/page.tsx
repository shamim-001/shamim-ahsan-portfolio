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

        <div className="mx-auto max-w-full py-20 sm:w-[500px] lg:w-[700px]">
          <div className="card">
            <div className="card-body">
              {CONTACTS.map((contact) => (
                <div
                  className="mx-auto flex w-[2/3] justify-between "
                  key={contact.title}
                >
                  <div className="flex items-center justify-center gap-8">
                    <span className="text-lg"> {contact.logo} </span>
                    <input
                      className="border-none bg-transparent outline-none"
                      type="text"
                      value={contact.item}
                    />
                  </div>
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
