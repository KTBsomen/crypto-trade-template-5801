import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className="absolute top-4 right-4 z-10"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </Button>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          borderRadius: '0.5rem',
          padding: '1.5rem',
          fontSize: '0.875rem',
          lineHeight: '1.5'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export const ApiDocumentation = () => {
  const curlExample = `curl -X POST https://api.invoicepdf.com/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "template_id": "template_123",
    "data": {
      "company_name": "Acme Corp",
      "invoice_number": "INV-001",
      "date": "2024-01-15",
      "amount": "1,299.00",
      "customer_name": "John Doe",
      "items": [
        {
          "description": "Web Development",
          "quantity": 1,
          "price": "1,299.00"
        }
      ]
    }
  }'`;

  const javascriptExample = `// Using fetch API
const response = await fetch('https://api.invoicepdf.com/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    template_id: 'template_123',
    data: {
      company_name: 'Acme Corp',
      invoice_number: 'INV-001',
      date: '2024-01-15',
      amount: '1,299.00',
      customer_name: 'John Doe',
      items: [
        {
          description: 'Web Development',
          quantity: 1,
          price: '1,299.00'
        }
      ]
    }
  })
});

const result = await response.json();
console.log('PDF URL:', result.download_url);`;

  const pythonExample = `import requests
import json

url = "https://api.invoicepdf.com/v1/generate"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "template_id": "template_123",
    "data": {
        "company_name": "Acme Corp",
        "invoice_number": "INV-001",
        "date": "2024-01-15",
        "amount": "1,299.00",
        "customer_name": "John Doe",
        "items": [
            {
                "description": "Web Development",
                "quantity": 1,
                "price": "1,299.00"
            }
        ]
    }
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(f"PDF URL: {result['download_url']}")`;

  const phpExample = `<?php
$url = 'https://api.invoicepdf.com/v1/generate';
$headers = [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
];

$data = [
    'template_id' => 'template_123',
    'data' => [
        'company_name' => 'Acme Corp',
        'invoice_number' => 'INV-001',
        'date' => '2024-01-15',
        'amount' => '1,299.00',
        'customer_name' => 'John Doe',
        'items' => [
            [
                'description' => 'Web Development',
                'quantity' => 1,
                'price' => '1,299.00'
            ]
        ]
    ]
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$result = json_decode($response, true);
echo "PDF URL: " . $result['download_url'];
curl_close($ch);
?>`;

  const responseExample = `{
  "success": true,
  "download_url": "https://cdn.invoicepdf.com/pdfs/invoice_123456789.pdf",
  "template_id": "template_123",
  "expires_at": "2024-01-16T12:00:00Z",
  "coins_used": 1,
  "remaining_coins": 299
}`;

  return (
    <section id="api-docs" className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-normal mb-6">
          API{" "}
          <span className="text-gradient font-medium">Documentation</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Simple REST API to generate PDFs from your templates. Just send the data and get your PDF back instantly.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* API Endpoint */}
        <Card className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              Endpoint
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
              <span className="text-green-400">POST</span>{" "}
              <span className="text-blue-400">https://api.invoicepdf.com/v1/generate</span>
            </div>
          </CardContent>
        </Card>

        {/* Code Examples */}
        <Card className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Code Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="curl" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="curl">cURL</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="php">PHP</TabsTrigger>
              </TabsList>
              <TabsContent value="curl" className="mt-4">
                <CodeBlock code={curlExample} language="bash" />
              </TabsContent>
              <TabsContent value="javascript" className="mt-4">
                <CodeBlock code={javascriptExample} language="javascript" />
              </TabsContent>
              <TabsContent value="python" className="mt-4">
                <CodeBlock code={pythonExample} language="python" />
              </TabsContent>
              <TabsContent value="php" className="mt-4">
                <CodeBlock code={phpExample} language="php" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Response Example */}
        <Card className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-white/10">
          <CardHeader>
            <CardTitle>Response Example</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock code={responseExample} language="json" />
          </CardContent>
        </Card>

        {/* Authentication */}
        <Card className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-white/10">
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 mb-4">
              Include your API key in the Authorization header as a Bearer token:
            </p>
            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
              <span className="text-blue-400">Authorization:</span>{" "}
              <span className="text-green-400">Bearer YOUR_API_KEY</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};