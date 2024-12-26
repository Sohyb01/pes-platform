"use client";

import { useToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckIcon, Coins, Copy, Trophy } from "lucide-react";
import { useRef, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CopyReferralCard = ({ className }: { className?: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isCopied, setisCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(inputRef.current?.value as string);
    setisCopied(true);
    toast({
      title: "Referral Code Copied!",
      description: "Share it with your friends and familly",
    });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-h3">
          Refer a friend and become part of{" "}
          <span className="text-primary">Future Skill Revolution</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <ul className="space-y-4">
          <li className="text-small text-muted-foreground flex items-center gap-2">
            <Coins size={24} />
            Refer a friend and earn 100 points. Your friend gets a 20% discount
            on enrolment
          </li>
          <li className="text-small text-muted-foreground flex items-center gap-2">
            <Trophy size={24} />
            Collect points and redeem a reward of your choice
          </li>
        </ul>
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
                  variant={isCopied ? "reversed" : "default"}
                  size="sm"
                  className="px-3"
                >
                  <span className="sr-only">Copy</span>
                  {isCopied ? <CheckIcon size={16} /> : <Copy size={16} />}
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
