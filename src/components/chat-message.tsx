interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export function ChatMessage({ message, isUser }: ChatMessageProps) {
  return (
    <div className={`flex items-start ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`rounded-lg p-3 max-w-[80%] ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}
