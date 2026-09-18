import { Button } from "@/components/ui/Button";
import { useToast } from "@/context/toast-context";
import { Copy } from "@/components/ui/Icons";
export function EmailCopyBox({ email }) {
  const { notify } = useToast();
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      notify("Adresse e-mail copiée dans le presse-papier !");
    } catch {
      notify(`Sélectionnez : ${email}`);
    }
  };
  return (
    <div className="email-box">
      <div>
        <p className="email-box__label">Courriel direct</p>
        <p className="email-box__value">{email}</p>
      </div>
      <Button
        type="button"
        variant="secondary"
        onClick={copy}
        className="btn--copy"
      >
        <Copy className="icon icon--14" aria-hidden="true" />
        Copier
      </Button>
    </div>
  );
}
