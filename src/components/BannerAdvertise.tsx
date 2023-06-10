import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import styled from 'styled-components/native';

const adUnitId = TestIds.BANNER;

export default function BannerAdvertise() {
  return (
    <Container>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </Container>
  );
}

const Container = styled.View``;
