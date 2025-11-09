import { useState, useEffect } from "react";
import { Cookie, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sanitizeText } from "@/lib/sanitize";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  preferences: false,
};

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences with validation
      try {
        const saved = JSON.parse(consent);
        // Validate the structure to prevent tampering
        if (
          typeof saved === 'object' &&
          typeof saved.necessary === 'boolean' &&
          typeof saved.analytics === 'boolean' &&
          typeof saved.marketing === 'boolean' &&
          typeof saved.preferences === 'boolean'
        ) {
          // Ensure necessary cookies are always true
          setPreferences({
            ...saved,
            necessary: true,
          });
        } else {
          // Invalid data, reset to defaults
          localStorage.removeItem("cookie-consent");
          setTimeout(() => setShowBanner(true), 1000);
        }
      } catch (e) {
        // Parsing failed, remove corrupted data
        localStorage.removeItem("cookie-consent");
        setTimeout(() => setShowBanner(true), 1000);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    // Ensure necessary cookies are always enabled
    const validatedPrefs: CookiePreferences = {
      necessary: true,
      analytics: Boolean(prefs.analytics),
      marketing: Boolean(prefs.marketing),
      preferences: Boolean(prefs.preferences),
    };
    
    // Add timestamp and version for future migrations
    const consentData = {
      ...validatedPrefs,
      timestamp: new Date().toISOString(),
      version: '1.0',
    };
    
    try {
      localStorage.setItem("cookie-consent", JSON.stringify(consentData));
      setPreferences(validatedPrefs);
      setShowBanner(false);
      setShowSettings(false);
    } catch (e) {
      console.error("Failed to save cookie preferences");
      // Fallback: still close the banner even if save fails
      setShowBanner(false);
      setShowSettings(false);
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    savePreferences(defaultPreferences);
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: key === "necessary" ? true : value, // Necessary cookies cannot be disabled
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-500">
        <div className="container mx-auto max-w-6xl">
          <div className="glassmorphic bg-card/95 backdrop-blur-xl border-2 border-border rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  We Value Your Privacy
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and 
                  personalize content. By clicking "Accept All", you consent to our use of cookies. 
                  You can customize your preferences or learn more in our{" "}
                  <Link to="/cookie-policy" className="text-secondary hover:underline font-medium">
                    Cookie Policy
                  </Link>.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(true)}
                  className="w-full sm:w-auto"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Customize
                </Button>
                <Button
                  variant="outline"
                  onClick={acceptNecessary}
                  className="w-full sm:w-auto"
                >
                  Necessary Only
                </Button>
                <Button
                  onClick={acceptAll}
                  className="w-full sm:w-auto bg-gradient-to-r from-secondary to-primary hover:opacity-90"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Cookie className="w-6 h-6 text-accent" />
              Cookie Preferences
            </DialogTitle>
            <DialogDescription>
              Manage your cookie preferences. You can enable or disable different types of cookies below.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <Label htmlFor="necessary" className="text-base font-semibold">
                    Necessary Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Essential for the website to function properly. These cannot be disabled.
                  </p>
                </div>
                <Switch
                  id="necessary"
                  checked={true}
                  disabled={true}
                  className="ml-4"
                />
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <Label htmlFor="analytics" className="text-base font-semibold">
                    Analytics Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => handlePreferenceChange("analytics", checked)}
                  className="ml-4"
                />
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <Label htmlFor="marketing" className="text-base font-semibold">
                    Marketing Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Used to track visitors across websites to display relevant advertisements 
                    and marketing campaigns.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => handlePreferenceChange("marketing", checked)}
                  className="ml-4"
                />
              </div>
            </div>

            {/* Preference Cookies */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <Label htmlFor="preferences" className="text-base font-semibold">
                    Preference Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Enable the website to remember your choices (such as language or region) 
                    to provide enhanced, personalized features.
                  </p>
                </div>
                <Switch
                  id="preferences"
                  checked={preferences.preferences}
                  onCheckedChange={(checked) => handlePreferenceChange("preferences", checked)}
                  className="ml-4"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setShowSettings(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              onClick={() => savePreferences(preferences)}
              className="w-full sm:flex-1 bg-gradient-to-r from-secondary to-primary"
            >
              Save Preferences
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};