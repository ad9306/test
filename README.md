This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

todo
app - compo - list
    - func
    - page
    -api - get
         - put
         - del

page db data - list - front rand

db ex. id/des/bool  -> dummy data

fetch ex. code
// async function TEST(data = fetchdatas)  {

//   try {
//       fetch("/api/gettodo", {
//           body: JSON.stringify(data),
//           headers: {
//               "Content-Type": "application/json",
//           },
//           method: "POST",
//       })
//           .then((response) => response.status === 404 ? alert("서버에러") : response.json())

//           // .then((response) => response.json())

//           .then((result) => alert(result))
//   } catch (error) {
//       throw (alert("서버에러"));
//   }

// }


-----

  const getData = async () => {

        setIsloading(true)


        try {
            const res = await FindContainer({
                no: containerNumber,
            });

            if (res.arrres?.length === 0 && res.depres?.length === 0) {
                alert("컨테이너가 정보가 없습니다.");
                setIsloading(false)
                return
            }
            setData(res);
            setIsloading(false)

        }


        catch (error) {
            console.log(error);
            return (
                alert("서버에러")
            )
        }

    };



----

"use server"
import { prisma } from '@/lib/prisma'

export async function FindContainer(props: any) {

    const { no } = props;


    try {
        const arrres = await prisma.arrulddata.findMany({
            where: {
                no: {
                    contains: no
                }
            },
            include: {
                arrulddmgpic: true,
            }
        })

        const depres = await prisma.container.findMany({
            where: {
                no: {
                    contains: no
                }
            }
        })

        return {
            arrres,
            depres,
        }

    } catch (error) {

        console.log(error);

        return { error };
    }
}

