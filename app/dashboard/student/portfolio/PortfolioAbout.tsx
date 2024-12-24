"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import FormUpdatePortfolioAbout, {
  FormSchemaUpdatePortfolioAbout,
} from "./FormUpdatePortfolioAbout";
import { z } from "zod";
import { useToast } from "@/components/hooks/use-toast";
import { INITIAL_ABOUT } from "@/lib/data";

const PortfolioAbout = ({ className }: { className?: string }) => {
  const [about, setAbout] = useState(INITIAL_ABOUT);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleUpdateAbout = (
    values: z.infer<typeof FormSchemaUpdatePortfolioAbout>
  ) => {
    setAbout(values.about);
    setIsDialogOpen(false);
    toast({
      title: "About has been updated!",
    });
  };

  return (
    <Card className={className}>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-h2">About</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-2">
              <Pen size={16} />
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit About</DialogTitle>
            </DialogHeader>
            <FormUpdatePortfolioAbout
              editObj={{ about }}
              onSubmit={handleUpdateAbout}
            />
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <p className="text-p">{about}</p>
      </CardContent>
    </Card>
  );
};

export default PortfolioAbout;
