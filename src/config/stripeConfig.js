import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51SOTAOBaMfMRnree7cXlQMDsnCEeTG6lYSbjnLILRoJhYKNcLWsRfToeSggPdsymRxx5Y1cABVw2q4l4Jz6VHsGT009pTLSV16',
);

export default stripePromise;
