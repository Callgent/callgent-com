const SectionTitle = ({
  title,
  paragraph,
  width = '570px',
  center,
  mb = '100px',
  titleSize = 'text-3xl md:text-[45px] sm:text-4xl',
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  titleSize?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? 'mx-auto text-center' : ''}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={`mb-4 ${titleSize} font-bold !leading-tight text-black dark:text-white`}>
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg" dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
    </>
  );
};

export default SectionTitle;
