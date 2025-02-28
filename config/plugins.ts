export default () => ({
    'publisher': {
		enabled: true,
		config: {
			hooks: {
				beforePublish: async ({ strapi, uid, entity }) => {
					console.log('beforePublish');
				},
				afterPublish: async ({ strapi, uid, entity }) => {
					console.log('afterPublish');
				},
				beforeUnpublish: async ({ strapi, uid, entity }) => {
					console.log('beforeUnpublish');
				},
				afterUnpublish: async ({ strapi, uid, entity }) => {
					console.log('afterUnpublish');
				},
			},
		},
	},
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                // baseUrl: process.env.CDN_URL,
                // rootPath: process.env.CDN_ROOT_PATH,
                s3Options: {
                    credentials: {
                        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                        secretAccessKey: process.env.AWS_ACCESS_SECRET,
                    },
                    region: process.env.AWS_REGION,
                    params: {
                        ACL: process.env.AWS_ACL || 'public-read',
                        signedUrlExpires: process.env.AWS_SIGNED_URL_EXPIRES || 15 * 60,
                        Bucket: process.env.AWS_BUCKET_NAME,
                    },
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        }
    }
});
