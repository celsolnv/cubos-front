import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface IDeleteAlert {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleConfirm: () => void;
}
export function DeleteAlert({ open, setOpen, handleConfirm }: IDeleteAlert) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-mauve-3 border-mauve-6">
        <AlertDialogHeader>
          <AlertDialogTitle className="dark:text-white text-mauve-12">
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
