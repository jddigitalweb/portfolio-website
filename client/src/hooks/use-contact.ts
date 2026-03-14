import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const subject = encodeURIComponent(`New Project Inquiry from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      window.location.href = `mailto:hello@jddigitalweb.com?subject=${subject}&body=${body}`;
      return data;
    },
    onSuccess: () => {
      toast({
        title: "Opening your email client...",
        description: "A new email has been pre-filled with your message.",
        variant: "default",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Could not open email client. Please email us directly.",
        variant: "destructive",
      });
    },
  });
}
