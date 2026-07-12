export default function BarComponent({ position }: { position: string }) {
  if (position === "bottom") {
    return (
      <div className="absolute border-t border-grey w-full bottom-0 left-0"></div>
    );
  }
  else {
    return (
        <div className="border-t border-grey w-full top-0 left-0"></div>
    )
  }
}
