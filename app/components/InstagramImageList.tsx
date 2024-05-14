import { InstagramImage } from "./InstagramImage";

export function InstagramImageList() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-5 gap-2 ">
      <InstagramImage
        src="/images/insta/IMG_4216.jpeg"
        alt="Kevin Wessa and Christine Simpson Wessa outside at Sacred Heart Cathedral in Pensacola, FL"
      />
      <InstagramImage
        src="/images/insta/IMG_5149.jpeg"
        alt="Kevin Wessa and Christine Simpson Wessa after the Christmas Vigil Mass at Sacred Heart Cathedral in Pensacola, FL"
      />
      <InstagramImage
        src="/images/insta/IMG_5915.jpeg"
        alt="Little Ava at the Youth 2000 event in Owensboro, KY"
        overlay={true}
      />
      <InstagramImage
        src="/images/insta/IMG_5953.jpeg"
        alt="Maria Spears and Christine Simpson Wessa backstage at the Youth 2000 event in Owensboro, KY"
      />
      <InstagramImage
        src="/images/insta/IMG_6441.jpeg"
        alt="Christine Simpson Wessa and Ava at the park, smiling"
      />
    </div>
  );
}
