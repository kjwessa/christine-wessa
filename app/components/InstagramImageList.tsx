import { InstagramImage } from "./InstagramImage";

export function InstagramImageList() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-5 gap-2 ">
      <InstagramImage src="/images/christine-walking.jpg" alt="" />
      <InstagramImage src="/images/christine-walking.jpg" alt="" />
      <InstagramImage src="/images/christine-walking.jpg" alt="" />
      <InstagramImage src="/images/christine-walking.jpg" alt="" />
      <InstagramImage src="/images/christine-walking.jpg" alt="" />
    </div>
  );
}
