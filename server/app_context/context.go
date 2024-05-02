package app_context

import (
	"github.com/GrantCanty/storefront/types"
	orderedmap "github.com/wk8/go-ordered-map/v2"
)

type AppContext struct {
	HomeInfo *orderedmap.OrderedMap[string, types.HomeDetails]
}

func NewAppContext() AppContext {
	c := AppContext{}
	c.initHome()

	return c
}
