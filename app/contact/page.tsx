"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { CONTACTS } from "@/constants/constants";
import { BsCopy } from "react-icons/bs";

const Page = () => {
  const { toast } = useToast();

  const handleCopy = (title: string) => {
    toast({
      title: `${title} copied!`,
    });
  };

  return (
    <div>
      <section className="container w-full py-12">
        <h1 className=" text-center text-3xl font-extrabold">
          Get in touch, Let&apos;s talk.
        </h1>

        <div className="mx-auto max-w-full py-20 sm:w-[500px] lg:w-[700px]">
          <Card className="pb-5 pt-8 text-center">
            <CardContent className="flex flex-col gap-5">
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
                  <Button
                    onClick={() => handleCopy(contact.title)}
                    variant="ghost"
                  >
                    <BsCopy className="text-lg" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default Page;
