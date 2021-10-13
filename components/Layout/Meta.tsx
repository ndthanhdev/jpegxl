import Head from "next/head";
import { jsonLdScriptProps } from "react-schemaorg";
import { BlogPosting, Organization } from "schema-dts";

export interface MetaProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  blog?: boolean;
}

export default function Meta(props: MetaProps) {
  const publishedSplit = props.datePublished.split(".");
  const publishedDate =
    "20" +
    publishedSplit[2] +
    "-" +
    publishedSplit[1] +
    "-" +
    publishedSplit[0];

  const modifiedSplit = props.dateModified.split(".");
  const modifiedDate =
    "20" + modifiedSplit[2] + "-" + modifiedSplit[1] + "-" + modifiedSplit[0];

  return (
    <Head>
      <link rel="canonical" href={`https://jpegxl.io/${props.url}`} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      <title>{props.title} | jpegxl.io ✨</title>

      <meta name="description" content={props.description} />
      <meta name="author" content="Justin Schmitz" />

      <meta
        property="og:site_name"
        content="Jpeg XL Converter | jpegxl.io ✨"
      />
      <meta property="og:type" content={props.blog ? "article" : "website"} />
      <meta property="og:url" content={`https://jpegxl.io/${props.url}`} />
      <meta property="og:title" content={props.title + " | " + "jpegxl.io"} />
      <meta property="og:description" content={props.description} />
      {props.image && <meta property="og:image" content={`${props.image}`} />}

      <meta name="twitter:card" content="summary"></meta>
      <meta property="twitter:creator" content="@jschmitz97" />
      <meta property="twitter:site" content="@jschmitz97" />
      <meta property="twitter:url" content="https://twitter.com/jschmitz97" />
      <meta
        property="twitter:title"
        content={props.title + " | " + "jpegxl.io ✨"}
      />
      <meta property="twitter:description" content={props.description} />
      {props.image && (
        <meta name="twitter:image" content="https://jpegxl.io/twitter.png" />
      )}

      <script
        {...jsonLdScriptProps<Organization>({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "jpegxl.io",
          "url": "https://jpegxl.io",
          "logo": "https://jpegxl.io/json-logo.png",
          "sameAs": [
            "https://discord.com/invite/6w42YpF5hm",
            "https://www.producthunt.com/",
          ],
        })}
      />

      {props.blog && (
        <script
          {...jsonLdScriptProps<BlogPosting>({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://jpegxl.io/" + props.url,
            },
            "headline": props.title,
            "description": props.description,
            "image": props.image,
            "author": {
              "@type": "Person",
              "name": "Justin Schmitz",
              "sameAs": [
                "https://twitter.com/jschmitz97",
                "https://dribbble.com/justinschmitz",
                "https://www.fiverr.com/zoayenemies",
                "https://www.upwork.com/freelancers/~014b24a2eaf9eac622",
                "https://www.xing.com/profile/Justin_Schmitz9/",
                "https://www.linkedin.com/in/justinschmitz97/",
              ],
            },
            "publisher": {
              "@type": "Organization",
              "name": "jpegxl.io",
              "logo": {
                "@type": "ImageObject",
                "url": "https://jpegxl.io/json-logo.png",
              },
            },
            "datePublished": publishedDate,
            "dateModified": modifiedDate,
            "isFamilyFriendly": true,
            "inLanguage": "en-US",
          })}
        />
      )}
    </Head>
  );
}