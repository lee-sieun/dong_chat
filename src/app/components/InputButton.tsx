import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { useState, KeyboardEvent } from "react";

interface InputButtonProps {
  buttonText: string;
  onSubmit: (value: string) => void;
}

export function InputWithButton({ buttonText, onSubmit }: InputButtonProps) {
  const [input, setInput] = useState("");

  const handleOnSubmit = () => {
    onSubmit(input);
    setInput("");
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnSubmit();
    }
  };
  return (
    <div className="flex w-full items-center space-x-2 gap-4 mt-[4]">
      <Input
        type="text"
        value={input}
        placeholder="type somethings..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleOnKeyDown}
      />
      <Button
        size="sm"
        type="submit"
        variant="outline"
        onClick={handleOnSubmit}
      >
        {buttonText}
      </Button>
    </div>
  );
}
