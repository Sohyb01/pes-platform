"use client";
import { useToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ConfirmDialogProps {
  body: string;
  toastMsg: string;
  action: () => void;
}

const ConfirmDialog = ({ body, toastMsg, action }: ConfirmDialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger className="flex-1" asChild>
        <Button className="w-fit" variant="destructive" size="sm">
          Cancel
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>{body}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button
            onClick={() => setDialogOpen(false)}
            variant="destructive"
            size="sm"
          >
            No
          </Button>
          <Button
            onClick={() => {
              action();
              setDialogOpen(false);
              toast({
                title: "Done!",
                description: toastMsg,
              });
            }}
            variant="outline"
            className="hover:bg-shade"
            size="sm"
          >
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
