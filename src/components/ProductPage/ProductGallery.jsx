export function ProductGallery({
  mainImage = "",
  thumbnails = []
}) {
  return (
    <div className="flex flex-col gap-4 w-full lg:w-auto">
          <img
            src={mainImage}
            loading="eager"
            className="w-full lg:w-80 object-cover rounded-xl border"
            alt=""
          />
      <div className="flex gap-3 overflow-x-auto">
        {thumbnails.map((img, i) => (
          <img
            key={i}
            src={img}
            loading="lazy"
            className="w-20 h-28 object-cover border rounded shrink-0"
            alt=""
          />
        ))}
      </div>

    </div>
  );
}
