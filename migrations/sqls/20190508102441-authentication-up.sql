CREATE TABLE admin.auth_clients (
	id                   integer  NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	client_id            varchar(50)  NOT NULL ,
	client_secret        varchar(50)  NOT NULL ,
	redirect_url         varchar(200)   ,
	access_token_expiration integer DEFAULT 900 NOT NULL ,
	refresh_token_expiration integer DEFAULT 86400 NOT NULL ,
	auth_code_expiration integer DEFAULT 180 NOT NULL ,
	secret               varchar(50)  NOT NULL ,
	created_on           timestamptz DEFAULT current_timestamp NOT NULL ,
	modified_on          timestamptz DEFAULT current_timestamp NOT NULL ,
	deleted              bool DEFAULT false NOT NULL ,
	user_ids             integer[],
	CONSTRAINT pk_auth_clients_id PRIMARY KEY ( id )
);

insert into admin.auth_clients
  (client_id, client_secret, secret)
  values
  ('l2app','qiweu12!@', 'oqwieuaklsas');
