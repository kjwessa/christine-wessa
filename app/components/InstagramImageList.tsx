import { InstagramImage } from "./InstagramImage";

export function InstagramImageList() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-5 gap-2 ">
      <InstagramImage
        src="/images/christineWessa_pensacola_walking-across-street.jpg"
        alt=""
      />
      <InstagramImage
        src="/images/christineWessa_pensacola_walking-across-street.jpg"
        alt=""
      />
      <InstagramImage
        src="/images/christineWessa_pensacola_walking-across-street.jpg"
        alt=""
      />
      <InstagramImage
        src="/images/christineWessa_pensacola_walking-across-street.jpg"
        alt=""
      />
      <InstagramImage
        src="/images/christineWessa_pensacola_walking-across-street.jpg"
        alt=""
      />
    </div>
  );
}
