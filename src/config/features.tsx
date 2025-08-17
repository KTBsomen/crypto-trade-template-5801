import { Palette, Braces, Zap, Database, FileCheck, Shield, Clock, Users } from "lucide-react";

export const features = [
  {
    title: "Template Designer",
    description: "Design pixel-perfect invoice templates visually with sections, tables, and branding.",
    icon: <Palette className="w-6 h-6" />,
    image: "/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
  },
  {
    title: "Blazing-fast PDF API",
    description: "Generate and retrieve PDF links in milliseconds with our scalable API.",
    icon: <Zap className="w-6 h-6" />,
    image: "/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png"
  },
  {
    title: "Digital Signatures",
    description: "Enterprise-grade digital signatures with legal compliance and verification.",
    icon: <FileCheck className="w-6 h-6" />,
    image: "/lovable-uploads/a2c0bb3a-a47b-40bf-ba26-d79f2f9e741b.png"
  },
  {
    title: "Audit Logs",
    description: "Complete audit trail with detailed logs for compliance and enterprise security.",
    icon: <Shield className="w-6 h-6" />,
    image: "/lovable-uploads/0dbe1b75-2c74-4ff8-ba55-4be4d74abe72.png"
  },
  {
    title: "Dynamic Placeholders",
    description: "Use placeholders like {{customer.name}} and {{items[].total}} to inject data at runtime.",
    icon: <Braces className="w-6 h-6" />,
    image: "/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png"
  },
  {
    title: "Automated Workflows",
    description: "Set up automated invoice generation with scheduled delivery and approval workflows.",
    icon: <Clock className="w-6 h-6" />,
    image: "/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
  },
  {
    title: "Team Management",
    description: "Enterprise user management with role-based permissions and team collaboration.",
    icon: <Users className="w-6 h-6" />,
    image: "/lovable-uploads/a2c0bb3a-a47b-40bf-ba26-d79f2f9e741b.png"
  },
  {
    title: "Storage & Webhooks",
    description: "Store PDFs, set expirations, and get notified via webhooks when documents are ready.",
    icon: <Database className="w-6 h-6" />,
    image: "/lovable-uploads/0dbe1b75-2c74-4ff8-ba55-4be4d74abe72.png"
  }
];