import clsx from "clsx";

export function Footer({ isFixed = true }: { isFixed: boolean }) {
  return (
    <footer
      className={clsx(
        " w-full flex justify-center items-center border-t-1 py-2 border-mauve-6 h-[80px]",
        isFixed && "fixed bottom-0",
      )}
    >
      <span className="text-base text-center text-primary-foreground">
        2025 © Todos os direitos reservados a <strong>Cubos Movies</strong>
      </span>
    </footer>
  );
}
