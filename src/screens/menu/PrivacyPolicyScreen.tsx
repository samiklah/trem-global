import React, { useEffect, useState } from "react";
import { Alert, Dimensions, ScrollView, Linking, Text} from "react-native";

import { HtmlView } from "../../components";
import { AppSettingsService } from "../../services";

const WIDTH = Dimensions.get("screen").width;

export const PrivacyPolicyScreen = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState<string>();

  useEffect(() => {
    AppSettingsService.getPrivacyPolicy()
      .then((res) => setPrivacyPolicy(res.data.privacyPolicy))
      .catch((err) => Alert.alert(err.message));
  }, []);
//<HtmlView htmlContent={privacyPolicy} imagesMaxWidthOffset={WIDTH - 32} />
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://backend-6qjkq.ondigitalocean.app/privacy-policy/trem-global')}>
        Privacy Policy
      </Text>
    </ScrollView>
  );
};
