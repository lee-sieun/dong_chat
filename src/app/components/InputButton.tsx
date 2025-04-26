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

  const handleOnKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
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
      />
      <Button
        size="sm"
        type="submit"
        variant="outline"
        onClick={handleOnSubmit}
        onKeyDown={handleOnKeyDown}
      >
        {buttonText}
      </Button>
    </div>
  );
}
