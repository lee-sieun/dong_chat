import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { useState } from "react";

interface InputButtonProps {
  buttonText: string;
  onSubmit: (value: string) => void;
}

export function InputWithButton({ buttonText, onSubmit }: InputButtonProps) {
  const [input, setInput] = useState("");
  return (
    <div className="flex w-full items-center space-x-2 gap-4 mt-[4]">
      <Input
        type="text"
        placeholder="type somethings..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        size="sm"
        variant="outline"
        type="submit"
        onClick={() => onSubmit(input)}
      >
        {buttonText}
      </Button>
    </div>
  );
}
