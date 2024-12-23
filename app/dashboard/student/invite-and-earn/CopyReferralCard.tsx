"use client";

import { useToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { useRef } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CopyReferralCard = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(inputRef.current?.value as string);
    toast({
      title: "Referral Code Copied!",
      description: "Share it with your friends and familly",
    });
  };

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="text-h3">Share With Friends</CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              ref={inputRef}
              id="link"
              defaultValue="3n23-mdoa-31bj"
              readOnly
            />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  onClick={handleCopy}
                  type="submit"
                  size="sm"
                  className="px-3"
                >
                  <span className="sr-only">Copy</span>
                  <Copy />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy Referral Code</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default CopyReferralCard;
