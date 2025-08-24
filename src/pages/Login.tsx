import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Mail, Lock, Building2, Users, Shield, Chrome, Github, Briefcase, ArrowLeft } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication with Supabase
    console.log("Login attempt:", { email, password });
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login with Supabase
    console.log("Social login:", provider);
  };

  const handleEnterpriseSSO = (method: string) => {
    // TODO: Implement enterprise SSO with Supabase
    console.log("Enterprise login:", method);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to your invoice platform</p>
        </div>

        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="individual" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Individual
            </TabsTrigger>
            <TabsTrigger value="enterprise" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Enterprise
            </TabsTrigger>
          </TabsList>

          {/* Individual/Team Login */}
          <TabsContent value="individual">
            <Card>
              <CardHeader>
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  For freelancers, small teams, and growing businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Social Login Options */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleSocialLogin("google")}
                  >
                    <Chrome className="w-4 h-4 mr-2" />
                    Continue with Google
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleSocialLogin("github")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Continue with GitHub
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
                  </div>
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>

                <div className="text-center text-sm">
                  <a href="#" className="text-primary hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enterprise Login */}
          <TabsContent value="enterprise">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Enterprise Access
                </CardTitle>
                <CardDescription>
                  Secure single sign-on for large organizations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Enterprise SSO Options */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    onClick={() => handleEnterpriseSSO("saml")}
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      SAML SSO
                    </div>
                    <Badge variant="secondary">Enterprise</Badge>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    onClick={() => handleEnterpriseSSO("azure")}
                  >
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Azure AD / Entra ID
                    </div>
                    <Badge variant="secondary">Microsoft</Badge>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    onClick={() => handleEnterpriseSSO("okta")}
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Okta
                    </div>
                    <Badge variant="secondary">Identity</Badge>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    onClick={() => handleEnterpriseSSO("pingidentity")}
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      PingIdentity
                    </div>
                    <Badge variant="secondary">Federated</Badge>
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or use domain login</span>
                  </div>
                </div>

                {/* Domain-based login */}
                <div className="space-y-2">
                  <Label htmlFor="domain-email">Corporate Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="domain-email"
                      type="email"
                      placeholder="user@company.com"
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We'll redirect you to your organization's login page
                  </p>
                </div>
                
                <Button className="w-full">
                  Continue with Corporate Account
                </Button>

                <div className="mt-6 p-4 glass-subtle rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Enterprise Features</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• SCIM user provisioning</li>
                    <li>• Advanced security controls</li>
                    <li>• Audit logs & compliance</li>
                    <li>• Custom branding</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-muted-foreground">
          New to our platform?{" "}
          <span className="text-primary">
            Start creating invoices immediately - no signup required
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;