import Links from "@/components/links"

export default function Footer() {
  return (
    <footer className="my-4 flex flex-col items-center justify-between sm:flex-col md:my-8 md:flex-row">
      <div className="mt-9 sm:mb-3">
        <small className="text-sm font-normal leading-none">
          2022-present &copy;
          <Links olink="https://github.com/imafancydev">imafancydev</Links>.
        </small>
      </div>
    </footer>
  );
}
