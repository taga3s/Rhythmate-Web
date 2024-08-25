import type * as schemaHelper from "../../../submodules/service/src/pkg/schemaHelper";

export type ImageType = "bow" | "cat" | "crown" | "gem" | "horse" | "shield" | "sword";

export type FrameColor = "bronze" | "silver" | "gold";

export type AchieveBadgeParams = schemaHelper.RequestData<"/badges/:id", "patch">;

export type AchieveBadgeRequest = schemaHelper.RequestData<"/badges/:id", "patch">;

export type AchieveBadgeResponse = schemaHelper.ResponseData<"/badges/:id", "patch">;

export type ListBadgesResponse = schemaHelper.ResponseData<"/badges", "get">;

export type PinBadgeParams = schemaHelper.RequestData<"/badges/pin/:id", "patch">;

export type PinBadgeRequest = schemaHelper.RequestData<"/badges/pin/:id", "patch">;

export type PinBadgeResponse = schemaHelper.ResponseData<"/badges/pin/:id", "patch">;

export type UnpinBadgeParams = schemaHelper.RequestData<"/badges/unpin/:id", "patch">;

export type UnpinBadgeRequest = schemaHelper.RequestData<"/badges/unpin/:id", "patch">;

export type UnpinBadgeResponse = schemaHelper.ResponseData<"/badges/unpin/:id", "patch">;
