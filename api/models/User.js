module.exports = {
	attributes : {
		id : {
			primaryKey : true,
			required : true,
			unique : true,
			type : "string",
		},

		email : {
			required : true,
			type : "email"
		},

		name : {
			required : true,
			type : "string"
		},

		portrait : {
			required : false,
			type : "url"
		},

		section : {
			required : true,
			type : "string"
		},

		role : {
			required : true,
			type : "string",
			enum : ["admin", "player"],
			defaultsTo : "player"
		},

		password : {
			required : true,
			type : "string"
		},

		sex : {
			type : "string",
			required : true,
			enum : ["male", "female"]
		},

		notifications : {
			collection : "notification",
			via : "target"
		},

		teams : {
			collection : "team",
			via : "members",
			dominant : true
		},

		leads : {
			collection : "team",
			via : "captain"
		}
	}
}


