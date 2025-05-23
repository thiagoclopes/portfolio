interface CardDemoProps {
    image: string;
    hoverGif: string;
    title: string;
    description: string;
    link: string;
}

export default function CardDemo({ image, hoverGif, title, description, link }: CardDemoProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group max-w-xs w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 transition-all duration-500"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          backgroundImage: `url(${hoverGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />


     <div className="relative z-10 bg-black/30 p-6 rounded-md">
        <h1
          className="font-extrabold text-2xl md:text-4xl text-white"
          style={{
            textShadow: "2px 2px 6px rgba(0,0,0,0.9)",
            WebkitTextStroke: "0.5px rgba(0,0,0,0.7)",
          }}
        >
          {title}
        </h1>
        <p
          className="font-medium text-lg md:text-xl mt-4 text-white"
          style={{
            textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
          }}
        >
          {description}
        </p>
      </div>

    </a>
  );
}
