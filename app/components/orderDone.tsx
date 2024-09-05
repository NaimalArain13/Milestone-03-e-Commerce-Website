import Link from "next/link";
import { useEffect } from "react";

interface OrderDoneProps {
  message: string;
  onClose: () => void;
}

export default function OrderDone({ message, onClose }: OrderDoneProps) {
  // Automatically close the popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-50 text-center">
      <p className="text-lg font-medium">{message}</p>
    </div>

  )}