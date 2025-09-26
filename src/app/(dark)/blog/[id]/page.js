import React from "react";
import Image from "next/image";
import blogs from "@/data/blogs3.json";

const blogContent = {
  1: {
    content: `JavaScript frameworks are evolving rapidly. In 2025, the top frameworks to learn include React, Vue, Angular, Svelte, Next.js, Nuxt.js, SolidJS, Qwik, Astro, and Remix. Each offers unique features for building modern web apps.\n\n**Why Learn a Framework?**\nFrameworks provide structure, reusable components, and best practices for building scalable applications. They help you avoid reinventing the wheel and focus on delivering value.\n\n**Framework Comparison:**\n- **React:** Huge ecosystem, component-based, great for SPAs and large apps.\n- **Vue:** Easy learning curve, flexible, strong community.\n- **Angular:** Enterprise-ready, opinionated, TypeScript-first.\n- **Svelte:** Compiles to minimal JS, fast, simple syntax.\n- **Next.js/Nuxt.js:** SSR/SSG, routing, API routes, great for SEO.\n- **SolidJS/Qwik/Astro/Remix:** Newer, focus on performance and modern DX.\n\n**How to Choose:**\nConsider your project needs, team experience, and community support. Try building a small project in each to see what fits best.\n\n**Conclusion:**\nStaying updated with frameworks keeps your skills relevant and opens up new opportunities in web development.`
  },
  2: {
    content: `AI coding assistants like GitHub Copilot, Amazon CodeWhisperer, and Tabnine are transforming how developers write code.\n\n**How They Work:**\nThese tools use large language models trained on public code to suggest code completions, generate functions, and even write tests.\n\n**Benefits:**\n- Boost productivity by reducing boilerplate\n- Help discover new APIs and best practices\n- Reduce errors and speed up onboarding\n\n**Limitations:**\n- May suggest insecure or incorrect code\n- Not a replacement for code review\n- Can introduce licensing concerns\n\n**Best Practices:**\n- Always review AI-generated code\n- Use as a pair-programming partner, not a replacement\n- Integrate with your IDE for best experience\n\n**Future Outlook:**\nAI assistants will become more context-aware and integrated into the full development lifecycle, from planning to deployment.`
  },
  3: {
    content: `TypeScript 5.5 introduces powerful new features such as improved type inference, faster builds, and enhanced support for ECMAScript modules.\n\n**What's New:**\n- Smarter type narrowing and inference\n- Performance improvements for large codebases\n- Better support for import/export syntax\n\n**Migration Tips:**\n- Upgrade dependencies and check for breaking changes\n- Use the new features to simplify your types\n- Leverage strict mode for safer code\n\n**Why TypeScript Matters:**\nTypeScript helps catch bugs early, improves code readability, and enables better tooling. It's essential for large-scale JS projects in 2025.\n\n**Resources:**\n- [TypeScript 5.5 Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html)\n- Community migration guides and tools.`
  },
  4: {
    content: `Microservices architecture enables scalable, maintainable backend systems. Node.js is a popular choice for building microservices due to its performance and ecosystem.\n\n**Why Microservices?**\n- Independent deployment and scaling\n- Technology diversity\n- Fault isolation\n\n**Node.js Best Practices:**\n- Use lightweight frameworks like Express or Fastify\n- Implement API gateways and service discovery\n- Use Docker/Kubernetes for deployment\n- Monitor with tools like Prometheus and Grafana\n\n**Communication Patterns:**\n- REST, gRPC, message queues (RabbitMQ, Kafka)\n- Handle failures gracefully with retries and circuit breakers\n\n**Conclusion:**\nNode.js microservices are a proven approach for modern, cloud-native backends.`
  },
  5: {
    content: `Edge computing is revolutionizing web app performance by moving computation closer to users.\n\n**What is Edge Computing?**\nInstead of relying solely on centralized servers, edge platforms run code at locations geographically closer to users.\n\n**Popular Edge Platforms:**\n- Cloudflare Workers\n- Vercel Edge Functions\n- AWS Lambda@Edge\n\n**Benefits:**\n- Lower latency\n- Improved reliability\n- Better compliance with data residency\n\n**How to Architect for the Edge:**\n- Use serverless functions for dynamic logic\n- Cache static assets at the edge\n- Design for statelessness\n\n**Future Trends:**\nEdge computing will enable new real-time, interactive experiences for users worldwide.`
  },
  6: {
    content: `Securing React applications is more important than ever.\n\n**Latest Threats in 2025:**\n- Cross-Site Scripting (XSS)\n- Cross-Site Request Forgery (CSRF)\n- Supply chain attacks\n\n**How to Secure Your App:**\n- Use libraries like DOMPurify to sanitize user input\n- Implement Content Security Policy (CSP) headers\n- Keep dependencies up to date\n- Use HTTPS everywhere\n- Audit third-party packages\n\n**Best Practices:**\n- Use React's built-in protections (dangerouslySetInnerHTML with care)\n- Prefer environment variables for secrets\n- Monitor with security tools and services\n\n**Conclusion:**\nSecurity is a continuous process. Stay informed and regularly audit your React apps to keep them safe.`
  }
};

export default function BlogDetails({ params }) {
  const { id } = params;
  const blog = blogs.find((b) => b.id === Number(id));
  if (!blog) return <div>Blog not found.</div>;
  return (
    <div className="container blog-details-container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="blog-details-content">
            <Image src={blog.image} alt={blog.title} width={800} height={500} className="blog-details-image" />
            <h1 className="blog-details-title">{blog.title}</h1>
            <div className="blog-details-meta">
              {blog.date.day} {blog.date.month} | {blog.tags.join(', ')}
            </div>
            {blogContent[blog.id]?.content.split(/\n\n+/).map((para, idx) => (
              <p key={idx} className="blog-details-paragraph">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({ id: blog.id.toString() }));
}
