import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import SignIn from '@/components/SignIn';

function SignInPage() {
  const isPortrait = useOrientation();
  return (
    <>
      <Meta title="Sign In" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <SignIn />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default SignInPage;
