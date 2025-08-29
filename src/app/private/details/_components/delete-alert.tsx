import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface IDeleteAlert {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleConfirm: () => void;
}
export function DeleteAlert({ open, setOpen, handleConfirm }: IDeleteAlert) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent className="bg-mauve-3 border-mauve-6">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            Deletar Filme?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. O filme será permanentemente
            removido da sua lista.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            Deletar Filme
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
