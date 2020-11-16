import Stripe from '../../../tools/stripe';

export default {

	fullName: _ => _.firstName + ' ' + _.lastName,
	photoUrl:()=> "https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/sumo/img/default-FFA-avatar.png"
};
