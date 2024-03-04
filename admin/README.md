This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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

```
admin
├─ .eslintrc.json
├─ .gitignore
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ img_astronaut.png
│  ├─ img_default-profile.png
│  └─ logo.png
├─ README.md
├─ src
│  └─ app
│     ├─ (auth)
│     │  └─ sign-in
│     │     ├─ layout.tsx
│     │     └─ page.tsx
│     ├─ (dashboard)
│     │  └─ (home)
│     │     ├─ layout.tsx
│     │     ├─ page.tsx
│     │     ├─ products
│     │     │  └─ page.tsx
│     │     ├─ users
│     │     │  └─ page.tsx
│     │     └─ [username]
│     │        └─ setting
│     │           └─ page.tsx
│     ├─ @modal
│     ├─ api
│     ├─ error.tsx
│     ├─ favicon.ico
│     ├─ layout.tsx
│     ├─ not-found.tsx
│     ├─ store
│     │  ├─ use-api-modal.ts
│     │  └─ use-pagination.ts
│     └─ ui
│        ├─ (auth)
│        ├─ (dashboard)
│        │  └─ (home)
│        │     ├─ @modal
│        │     │  ├─ api-modal.module.css
│        │     │  └─ ApiModal.tsx
│        │     ├─ constants
│        │     │  ├─ api-specs.ts
│        │     │  └─ menu-list.tsx
│        │     ├─ dashboard.module.css
│        │     ├─ hooks
│        │     │  └─ use-search-form.ts
│        │     ├─ types
│        │     │  ├─ api-specs.ts
│        │     │  ├─ chart-data.ts
│        │     │  └─ menu-list.ts
│        │     ├─ users
│        │     │  ├─ types
│        │     │  │  └─ user.ts
│        │     │  ├─ users.module.css
│        │     │  └─ _components
│        │     │     ├─ UserInfo.tsx
│        │     │     ├─ UserProfile.tsx
│        │     │     ├─ users-search.module.css
│        │     │     ├─ users-table.module.css
│        │     │     ├─ UsersSearch.tsx
│        │     │     └─ UsersTable.tsx
│        │     ├─ utils
│        │     │  ├─ getApiSpecsByTag.ts
│        │     │  ├─ getCurrPathname.ts
│        │     │  ├─ getPageTotal.ts
│        │     │  └─ getPaginationWindow.ts
│        │     └─ _components
│        │        ├─ api-services.module.css
│        │        ├─ ApiServices.tsx
│        │        ├─ ApiSpec.tsx
│        │        ├─ ApiSpecInfo.tsx
│        │        ├─ button.module.css
│        │        ├─ Button.tsx
│        │        ├─ data-chart.module.css
│        │        ├─ DataChart.tsx
│        │        ├─ footer.module.css
│        │        ├─ Footer.tsx
│        │        ├─ input.module.css
│        │        ├─ Input.tsx
│        │        ├─ latest-report.module.css
│        │        ├─ LatestReport.tsx
│        │        ├─ LogoutButton.tsx
│        │        ├─ MethodBadge.tsx
│        │        ├─ MoveToFirstPage.tsx
│        │        ├─ MoveToLastPage.tsx
│        │        ├─ navbar.module.css
│        │        ├─ Navbar.tsx
│        │        ├─ NextPage.tsx
│        │        ├─ PaginateControl.tsx
│        │        ├─ pagination.module.css
│        │        ├─ Pagination.tsx
│        │        ├─ Pathname.tsx
│        │        ├─ PrevPage.tsx
│        │        ├─ rightbar.module.css
│        │        ├─ RightBar.tsx
│        │        ├─ RightBarButton.tsx
│        │        ├─ search.module.css
│        │        ├─ Search.tsx
│        │        ├─ ServiceDesc.tsx
│        │        ├─ SetPage.tsx
│        │        ├─ sidebar.module.css
│        │        ├─ Sidebar.tsx
│        │        ├─ SidebarMenuLink.tsx
│        │        ├─ total-card.module.css
│        │        ├─ TotalCardItem.tsx
│        │        └─ TotalCardList.tsx
│        ├─ globals.css
│        ├─ lib
│        │  └─ utils.ts
│        ├─ types
│        │  └─ date.ts
│        └─ _components
│           └─ ExecuteButton.tsx
└─ tsconfig.json

```