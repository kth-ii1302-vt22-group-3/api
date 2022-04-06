SET client_encoding = 'UTF8'; 

CREATE TABLE public.temperature (
    id integer not null,
    timestamp notnull timestamp(0),
    value double precision not null,
    unit varchar(30) not null
);

ALTER TABLE public.temperature ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.temperature_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);