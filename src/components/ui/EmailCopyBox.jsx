import { Button } from "@/components/ui/Button";
import { useToast } from "@/context/toast-context";
import { Copy } from "@/components/ui/Icons";
import { useI18n } from "@/i18n";
export function EmailCopyBox({ email }) {
  const { notify } = useToast();
  const { t } = useI18n();
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      notify(t.contact.copied);
    } catch {
      notify(`${t.contact.copyFallback} : ${email}`);
    }
  };
  return (
    <div className="email-box">
      <div>
        <p className="email-box__label">{t.contact.mailLabel}</p>
        <p className="email-box__value">{email}</p>
      </div>
      <Button
        type="button"
        variant="secondary"
        onClick={copy}
        className="btn--copy"
      >
        <Copy className="icon icon--14" aria-hidden="true" />
        {t.contact.copy}
      </Button>
    </div>
  );
}
